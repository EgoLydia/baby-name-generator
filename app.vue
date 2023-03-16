<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the 'Find Names' button below</p>
    <div class="options-container">
      <Option :option="option" :options=options v-for=" option in optionsArray" :key="option.title" />
      <button class="primary" @click="computedSelectedNames">Find Names</button>
      <div class="cards-container">
        <CardName :name="name" v-for="name, index in selectedNames" :key="name" @remove="() => removeName(index)"
          :index="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Gender, Popularity, Length, names } from '@/data'

interface OptionState {
  gender: Gender;
  popularity: Popularity;
  length: Length
}

const options = reactive<OptionState>({
  gender: Gender.BOY,
  popularity: Popularity.UNIQUE,
  length: Length.ALL
})

const optionsArray = [
  {
    title: '1) Choose a gender',
    category: 'gender',
    buttons: [Gender.GIRL, Gender.BOY, Gender.UNISEX]
  },
  {
    title: "2) Choose a name's popularity",
    category: 'popularity',
    buttons: [Popularity.TRENDY, Popularity.UNIQUE]
  },
  {
    title: "3) Choose a name's length",
    category: 'length',
    buttons: [Length.LONG, Length.ALL, Length.SHORT]
  },
]

const selectedNames = ref<string[]>([])

const computedSelectedNames = () => {
  const filteredNames = names.filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === Length.ALL) return true
      else return name.length === options.length
    })
  selectedNames.value = filteredNames.map(name => name.name)
}

const removeName = (index: number) => {
  const filteredNames = [...selectedNames.value]
  filteredNames.splice(index, 1)
  selectedNames.value = filteredNames
}
</script>


<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}


.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}
</style>