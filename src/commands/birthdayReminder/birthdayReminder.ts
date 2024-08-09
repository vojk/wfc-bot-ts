import {gql} from "graphql-request";
import {config} from "../../config";
import {Client, TextChannel} from "discord.js";
import {getTextFromStrapi} from "../../strapi/strapi";
import {replacePlaceholdersWithList} from "../../utils/reformatText";

const queryBirthdays = gql`
    query birthday {
  birthdays {
    data {
      id
      attributes {
        name
        dateOfBirth
        guild {
          data {
            attributes {
              guild_id
            }
          }
        }
      }
    }
  }
}
`;

async function birthdayReminder_() {
    const response = await config.graphQLClient.request(queryBirthdays);
    return response.birthdays.data;
}

async function checkBirthday() {
    const birthdays = await birthdayReminder_()
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayYear = today.getFullYear();
    const todayDate = new Date(todayYear, todayMonth, todayDay);
    for (const birthday of birthdays) {
        const birthdayDate = new Date(birthday.attributes.dateOfBirth);
        if (birthdayDate.getDate() === todayDate.getDate() && birthdayDate.getMonth() === todayDate.getMonth()) {
            return birthday;
        }
    }
    return null;
}

function calculateAge(dateOfBirth: string) {
    const dateOfBirth_DATE = new Date(dateOfBirth)
    const today = new Date();
    const todayYear = today.getFullYear();
    const dateOfBirthYear = dateOfBirth_DATE.getFullYear()
    return todayYear - dateOfBirthYear
}

async function sendBirthdayMessage(client: Client, birthday: any) {
    if (!(birthday == null)) {
        const guild = client.guilds.cache.get('281524601765494784')
        const channel = guild?.channels.cache.get('795401503488606209') as TextChannel
        const text = await getTextFromStrapi('Birthday')
        const age = calculateAge(birthday.attributes.dateOfBirth)

        const formattedText = replacePlaceholdersWithList(text, [birthday.attributes.name, age], ['{user}', '{age}'])

        console.log(formattedText)

        await channel.send(formattedText)
    }
}

export async function birthdayReminder(client: Client) {
    const birthday = await checkBirthday();

    await sendBirthdayMessage(client, birthday)


    setInterval(async () => {
        await sendBirthdayMessage(client, birthday)
    }, 1000 * 60 * 60 * 24);
}


/*
* const today = new Date();
        const todayString = today.toISOString().split('T')[0];
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();
        const todayYear = today.getFullYear();
        const todayDate = new Date(todayYear, todayMonth, todayDay);
        for (const reminder of data) {
            const reminderDate = new Date(reminder.date);
            if (reminderDate.getDate() === todayDate.getDate() && reminderDate.getMonth() === todayDate.getMonth()) {
                const user = await interaction.guild?.members.fetch(reminder.userId);
                if (user) {
                    await interaction.reply(`It's ${user.displayName}'s birthday today!`);
                }
            }
        }*/
