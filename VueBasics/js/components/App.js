import Assignments from "./Assignments.js";
import Card from "./Card.js";

export default {
    components: { Assignments, Card },
    template: `
        <div class="grid gap-6">
            <assignments></assignments>
            
            <card>
                <!-- custom named slot -->
                <template v-slot:title>Additional Card</template>
                
                <!-- default slot -->
                Some Stuff
            </card>

            <card>Card Without Title</card>

            <card>
                Card With footer
                <template v-slot:footer>I'M A CARD!</template>
            </card>
        </div>
    `
}