export default {
    template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <!-- All slots are stored in $slots, if title exists render h2 element -->
            <h2 v-if="$slots.title" class="font-bold mb-2">
                <slot name="title"></slot>
            </h2>

            <!-- name attribute defaults to 'default' -->
            <slot></slot>

            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-2 text-sm">
                <slot name="footer"></slot>
            </footer>
        </div>
    `
}