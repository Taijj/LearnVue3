import AssignmentItem from "./AssignmentItem.js";
import AssignmentTags from "./AssignmentTags.js";
import Card from "./Card.js";

export default {
    components: { AssignmentItem, AssignmentTags, Card },
    template: `        
        <card v-show="assignments.length" class="w-72">

            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }} ({{ filtered.length }}/{{assignments.length}})
                </h2>
                
                <button v-show="canToggle" @click="isExpanded = !isExpanded">
                    {{ isExpanded ? '&or;' : '&lt;' }}
                </button>
            </div>
                        
            <div v-if="isExpanded">
                <assignment-tags
                    :initialTags="assignments.map(a => a.tag)"
                    v-model:selectedTags="selectedTags"
                />

                <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">               
                    <assignmentItem
                        v-for="a in filtered"
                        :key="a.id"
                        :assignment="a"
                    />
                </ul>
            </div>

            <!-- default slot, everything between this components html tags, will go here -->
            <slot></slot>

            <!-- # is short for v-slot: -->
            <template #footer>This is a footer</template>
        </card>                
    `,
    
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            selectedTags: [],
            isExpanded: true
        };
    },    

    computed: {       
        filtered() {
            return this.selectedTags.length
                ? this.assignments.filter(a => this.selectedTags.includes(a.tag))
                : this.assignments;
        }        
    }
}