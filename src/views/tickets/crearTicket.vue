<template>
    <h3 style="margin-left:2%;margin-top: 2%;font-size:2rem;font-weight:bold; font-family:'Times New Roman', Times, serif;">
        CREAR TICKET
    </h3>
    <v-divider style="margin-bottom: 1%;margin-left: 2%;margin-right: 2.3%;"></v-divider>

    <v-card style="width: 94%;   margin-left: 2%; margin-right: 2%;" variant="outlined" title="Reportar problema">

        <v-div>
            <v-row>
                <v-col cols="6" md="6"> <v-text-field label="CORREO" hint="Ejemplo@duxon.com.mx"></v-text-field>
                </v-col>

                <v-col cols="6" md="6">
                    <v-select v-model="selectEquipo" :items="itemsEquipo" label="Equipo"></v-select>
                </v-col>
            </v-row>

            <v-row>

                <v-col cols="6" md="6">
                    <v-select v-model="selectCategoria" :items="itemsCategoria" label="Categoría"></v-select>
                </v-col>

                <v-col cols="6" md="6">
                    <v-select v-model="selectSubcategoria" :items="itemsSubcategoria" label="Subcategoría"></v-select>
                </v-col>
            </v-row>

            <v-row style="width: 99%; margin-left: 0.5%;">
                <v-textarea bg-color="light-blue-lighten-5" color="blue-darken-3" label="Describe el problema aquí..."
                    no-resize="true"></v-textarea>
            </v-row>

            <v-row>

                <v-col style="display: flex;justify-content: space-between; margin-left: 1%;margin-right: 1.5%;">

                    <v-btn color="blue-grey" class="ma-2 white--text" @click="dialogFoto = true">
                        Añadir imágenes &nbsp
                        <v-icon>
                            mdi-folder-multiple-image
                        </v-icon>
                    </v-btn>

                    <v-btn color="blue" class="ma-2 white--text">
                        Enviar &nbsp
                        <svg-icon type="mdi" :path="path">
                        </svg-icon>
                    </v-btn>
                </v-col>
            </v-row>


        </v-div>

        <v-col></v-col>

    </v-card>

    <v-dialog v-model="dialogFoto" max-width="70%">
        kpasho mama
        <v-btn> hola </v-btn>

    </v-dialog>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTagPlus } from '@mdi/js';
import { mdiReceiptTextSendOutline } from '@mdi/js';

export default ({

    components: {
        SvgIcon
    },

    data() {
        return {
            drawer: false,
            path: mdiTagPlus,
            itemsEquipo: ['LAPTOP HP PAVILION', 'LAPTOP DELL NEXTEP', 'DESKTOP LENOVO', 'AIO HP LA'],
            itemsCategoria: ['Correo', 'Hardware', 'Software', 'Contabo',],
            itemsSubcategoria: ['No abre Outlook', 'No envio y/o recibo correos', 'Funciona lento el correo', 'Cambio de firma', 'Notificiación o mensaje de error', 'Activación del correo'],

            dialogFoto: false,

            path: mdiReceiptTextSendOutline,
        }

    },
});
</script>