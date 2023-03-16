        <p @click="removeName">x</p>
const emit = defineEmits(['remove'])

const removeName = () => {
    emit('remove', props.index)
}
