export default {
    // Html Template
    // Class is bound to an object with classes that are added, if the condition is true
    template: `
        <button
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,                
                'bg-blue-400 hover:bg-blue-600': type == 'primary',
                'bg-purple-200 hover:bg-purple-400': type == 'secondary',
                'bg-gray-200 hover:bg-gray-400': type == 'muted',
                'is-loading': processing
            }"
            :disabled="processing">
            <slot />
        </button>
    `,

    // Declarations of properties to be set from outside this component
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },    
}