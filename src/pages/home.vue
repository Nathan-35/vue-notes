<template>
    <div class="md-body">
        <Form @onSubmit="handleSubmit" />
        <List @onRemove="handleRemove" :items="notes" />
    </div>
</template>

<script>
import Form from '@/components/Notes/Form'
import List from '@/components/Notes/List'

export default {
    components: { Form, List },
    data() {
        return {
            notes: [
                {
                    title: 'Learn to Vue 3',
                },
                {
                    title: 'Finish course',
                }
            ]
        }
    },
    methods: {
        handleSubmit(title) {
            const note = {
                title: title,
            }
            this.notes.push(note)
        },
        handleRemove(index) {
            this.notes.splice(index, 1)
        },
        getNotes() {
            const localNotes = localStorage.getItem('notes')
            if (localNotes) {
                this.notes = JSON.parse(localNotes)
            }
        }
    },
    watch: {
        notes: {
            handler(updatedList) {
                localStorage.setItem('notes', JSON.stringify(updatedList))
            },
            deep: true
        }
    },
    mounted() {
        this.getNotes()
    }
}
</script>