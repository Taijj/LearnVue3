export default {
    template: `
        <div class="flex gap-2">
            <!-- Standard class definition can be added + a :class - will be merged behind the scenes -->
            <button 
                v-for="t in allTags"
                @click="onTagClick(t)"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': isSelected(t)
                }"                    
            >
                {{ t }}
            </button>
        </div>
    `,

    data() {
        return {
            selectedTags: []
        };
    },
    props: {
        // Default name for v-model property is 'modelValue', to use a custom name v-model:customName has to be used as attribtue
        initialTags: Array
    },

    methods: {
        onTagClick(t) {
            if(t == 'all') {
                this.selectedTags = [];
                this.notifyUpdate();
                return;
            }

            let index = this.selectedTags.indexOf(t);
            if(index >= 0)
                this.selectedTags.splice(index, 1);
            else
                this.selectedTags.push(t);
            this.notifyUpdate();            
        },
        isSelected(t) {
            return t == 'all'
                ? !this.selectedTags.length
                : this.selectedTags.includes(t);
        },

        notifyUpdate() {
            // Event emitted to update v-model property, has to have the format: update:propertyName
            this.$emit('update:selectedTags', this.selectedTags);  
        }
    },
    computed: {
        allTags() {                         
            // Set is a list where each element has to be unique
            // ... destructure operator, turn collection into elements
            return ['all', ...new Set(this.initialTags.filter(t => t))];
        }        
    }
}