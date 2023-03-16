    <div class="option-container">
        <h4>{{ option.title }}</h4>
        <div class="option-button">
            </button>
        </div>
    </div>
</template>
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
