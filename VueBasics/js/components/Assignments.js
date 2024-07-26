import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `        
        <section class="flex gap-8">
            <assignment-list :assignments="filters.todo" title="Todo:">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <assignment-list :assignments="filters.done" title="Done:" can-toggle></assignment-list>                        
        </section>
    `,

    data() {
        return {
            assignments: []
        }
    },    
    computed: {
        filters() {
            return {
                todo: this.assignments.filter(a => !a.complete),
                done: this.assignments.filter(a => a.complete),
            }
        }
    },

    // Lifecycle hook
    created() {        
        // Ajax call to db endpoint
        fetch('http://localhost:3001/assignments')
            .then(r => r.json())
            .then(d => this.assignments = d);
    },

    methods: {
        add(name) {
            
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length+1
            });
        }
    }
}