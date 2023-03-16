<template>
    <div class="option-container">
        <h4>{{ option.title }}</h4>
        <div class="option-button">
            <button v-for="value, index in option.buttons" :key="value" @click="() => options[option.category] = value"
                class="option" :class="computeButtonClasses(value, index)">
                {{ value }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Gender, Length, Popularity } from "@/data"

interface OptionProps {
    option: {
        title: string,
        category: string,
        buttons: Gender[] | Popularity[] | Length[]
    };
    options: {
        gender: Gender,
        popularity: Popularity,
        length: Length
    }

}

const props = defineProps<OptionProps>();

const computeButtonClasses = (value, index) => {
    const classNames = []
    if (props.options[props.option.category] === value) {
        classNames.push("option-active")
    }
    if (index === 0) classNames.push("option-left")
    if (index === props.option.buttons.length - 1) classNames.push("option-right")
    return classNames.join(" ")

}
</script>

<style scoped>
.option-container {
    margin-bottom: 2rem;
}

.option {
    background: white;
    outline: 0.15rem solid rgb(249, 87, 89);
    padding: 0.75rem;
    border: none;
    width: 12rem;
    font-size: 1rem;
    color: rgb(27, 60, 138);
    font-weight: 200;
    cursor: pointer;
}

.option-left {
    border-radius: 1rem 0 0 1rem;
}

.option-right {
    border-radius: 0 1rem 1rem 0;
}

.option-active {
    background-color: rgb(249, 87, 89);
    color: white;
}
</style>
