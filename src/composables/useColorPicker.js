import {ref} from 'vue';


export const useColorPicker = (color, val) => {

    const user_message = ref("Pick a color...")

    // between 1 - 4
    const randomVal = Math.floor(Math.random() * 3) + 1


    if (color[randomVal] === val) {
        user_message.value = `You win... [answer: ${color[randomVal]}]`
    } else {
        user_message.value = `You loose [answer: ${color[randomVal]}]`
    }

    return {user_message}

}