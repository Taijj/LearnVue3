export default {
    template: `
        <li class="flex items-center p-2">
            <label>
                <input type="checkbox" v-model="assignment.complete" class="mr-2">                    
                {{ assignment.name }}                
            </label>
        </li>
    `,

    props: {
        assignment: Object
    },    
}