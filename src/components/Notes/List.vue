<template>
    <div class="notes-list">
        <div class="note-item" v-for="(note, index) in items" :key="index">
            <div class="note-header">
                <p>{{ note.title }}</p>
                <p style="cursor:pointer;" @click="$emit('onRemove', index)">&#10005;</p>
            </div>
        </div>
    </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList'

export default {
    components: { TagsList },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
.notes-list {
    padding: 40px 0;
}

.note-item {
    width: 60%;
    padding: 18px 20px;
    margin: 0 auto 20px;
    border-radius: 14px;
    background-color: #fff;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba($color: #000, $alpha: 0.02);

    &:hover {
        box-shadow: 0 30px 30px rgba($color: #000, $alpha: 0.04);
        transform: translate(0, -6px);
        transition-delay: 0s !important;
    }
}

.note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.note-footer {
    display: flex;

    &>* {
        justify-content: start;
    }
}
</style>