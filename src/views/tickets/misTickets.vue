<template>
    <v-card style="z-index: 0; height: 100%;background-color: white;">

        <!--SECCION PRINCIPAL DE MIS TICKETS-->
        <v-tabs v-model="tab" bg-color="white" show-arrows slider-color="light-blue accent-4">
            <v-tab value="tab-1"> Pendientes</v-tab>
            <v-tab value="tab-2"> En seguimiento</v-tab>
            <v-tab value="tab-3"> Atendidos</v-tab>
        </v-tabs>
        <v-col cols="11" style="display: flex;justify-content:end;margin-right: 0%;">
            <v-btn @click="dialogCrearTicket = true" small style="vertical-align: bottom;" prepend-icon="mdi-text-box-plus"
                color="blue" bg-color="white">Crear Ticket
            </v-btn></v-col>

        <v-window v-model="tab">
            <v-window-item value="tab-1" style="min-height:  100%; margin-top: 0%; margin-bottom: 5%; border: 0;">

                <v-card max-width="65%" style="margin-left: 1%;">
                    <v-container>
                        <v-row dense>
                            <v-col cols="12">
                                <v-card color="#385F73" theme="dark">
                                    <v-card-title class="text-h5">
                                        TICKET #1
                                    </v-card-title>
                                    <v-row>
                                        <v-div style="width: 45%;">
                                            <v-expansion-panels color="#385F73" style="margin-top: 2%;">
                                                <v-expansion-panel style="margin-left: 8%;" bg-color="#385F73"
                                                    variant="inset" title="DESCRIPCION DEL PROBLEMA" text="-LA COMPUTADORA SE RELENTIZA AL ABRIR OUTLOOK Y NO HABILITA LOS BOTONES
                                                                        -NO ENVIA CORREOS Y SALE ERROR DE LOGIN
                                                                        -TARDA AL PRENDER">
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </v-div>
                                        <v-div>
                                            <v-col>
                                                <v-list style="background-color: #385F73">
                                                    <v-list-item style="background-color: #385F73;"
                                                        title="FECHA CREACION: ">
                                                        <v-list-item-subtitle>13/04/2023 </v-list-item-subtitle>
                                                    </v-list-item>
                                                </v-list>
                                                <v-list style="background-color: #385F73">
                                                    <v-list-item title="CATEGORIA">
                                                        <v-list-item-subtitle> OFFICE </v-list-item-subtitle>
                                                    </v-list-item>
                                                </v-list>

                                            </v-col>
                                        </v-div>

                                        <v-col>
                                            <v-list style="background-color: #385F73">
                                                <v-list-item style="background-color: #385F73;" title="PRIORIDAD: ">
                                                    <v-list-item-subtitle> 2 </v-list-item-subtitle>
                                                </v-list-item>
                                            </v-list>


                                        </v-col>
                                    </v-row>
                                    <v-card-actions class="justify-space-between"><v-avatar size="75" rounded="0"
                                            style="margin-left: 2.5%;">
                                            <v-img src="src/assets/pendiente.png"></v-img>
                                        </v-avatar>
                                        <v-btn style="margin-right: 10.5%;" variant="tonal">
                                            VER DETALLES
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>

                            <v-col cols="12">
                                <v-card color="#1F7087" theme="dark">
                                    <div>
                                        <div>
                                            <v-card-title class="text-h5">
                                                TICKET #2
                                            </v-card-title>
                                            <v-row>
                                                <v-div style="width: 45%;">
                                                    <v-expansion-panels color="#1F7087" style="margin-top: 2%;">
                                                        <v-expansion-panel style="margin-left: 8%;" bg-color="#1F7087"
                                                            variant="inset" title="DESCRIPCION DEL PROBLEMA"
                                                            text="Buenos días, se solicita instalación de drivers de impresora del piso 2 a computadora de juridico. Saludos">
                                                        </v-expansion-panel>
                                                    </v-expansion-panels>
                                                </v-div>
                                                <v-div>
                                                    <v-col>
                                                        <v-list style="background-color: #1F7087">
                                                            <v-list-item style="background-color: #1F7087;"
                                                                title="FECHA CREACION: ">
                                                                <v-list-item-subtitle>03/07/2023 </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                        <v-list style="background-color: #1F7087">
                                                            <v-list-item title="CATEGORIA">
                                                                <v-list-item-subtitle> IMPRESORA </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-col>

                                                </v-div>

                                                <v-col>
                                                    <v-list style="background-color: #1F7087">
                                                        <v-list-item style="background-color: #1F7087;" title="PRIORIDAD: ">
                                                            <v-list-item-subtitle> 2 </v-list-item-subtitle>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                            </v-row>
                                            <v-card-actions class="justify-space-between">

                                                <v-avatar size="75" rounded="0" style="margin-left: 2.5%;">
                                                    <v-img src="src/assets/pendiente.png"></v-img>
                                                </v-avatar>
                                                <v-btn style="margin-right: 10.5%;" variant="tonal">
                                                    VER DETALLES
                                                </v-btn>
                                            </v-card-actions>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                            <!--#952175 color 3-->
                            <v-col cols="12">
                                <v-card color="#952175" theme="dark">
                                    <div>
                                        <div>
                                            <v-card-title class="text-h5">
                                                TICKET #3
                                            </v-card-title>
                                            <v-row>
                                                <v-div style="width: 45%;">
                                                    <v-expansion-panels color="#952175" style="margin-top: 2%;">
                                                        <v-expansion-panel style="margin-left: 8%;" bg-color="#952175"
                                                            variant="inset" title="DESCRIPCION DEL PROBLEMA"
                                                            text="Buenos días, se solicita instalación de drivers de impresora del piso 2 a computadora de juridico. Saludos">
                                                        </v-expansion-panel>
                                                    </v-expansion-panels>
                                                </v-div>
                                                <v-div>
                                                    <v-col>
                                                        <v-list style="background-color: #952175">
                                                            <v-list-item style="background-color: #952175;"
                                                                title="FECHA CREACION: ">
                                                                <v-list-item-subtitle>03/07/2023 </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                        <v-list style="background-color: #952175">
                                                            <v-list-item title="CATEGORIA">
                                                                <v-list-item-subtitle> IMPRESORA </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-col>

                                                </v-div>

                                                <v-col>
                                                    <v-list style="background-color: #952175">
                                                        <v-list-item style="background-color: #952175;" title="PRIORIDAD: ">
                                                            <v-list-item-subtitle> 2 </v-list-item-subtitle>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                            </v-row>
                                            <v-card-actions class="justify-space-between">

                                                <v-avatar size="80" rounded="0" style="margin-left: 2.5%;">
                                                    <v-img src="src/assets/pendiente.png"></v-img>
                                                </v-avatar>
                                                <v-btn style="margin-right: 10.5%;" variant="tonal">
                                                    VER DETALLES
                                                </v-btn>
                                            </v-card-actions>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>

            </v-window-item>


            <v-window-item value="tab-2" style="min-height:  100%; margin-top: 0%; margin-bottom: 5%; border: 0;">

                <v-card max-width="65%" style="margin-left: 1%;">
                    <v-container>
                        <v-row dense>
                            <v-col cols="12">
                                <v-card color="#385F73" theme="dark">
                                    <v-card-title class="text-h5">
                                        TICKET #1SSS
                                    </v-card-title>
                                    <v-row>
                                        <v-div style="width: 45%;">
                                            <v-expansion-panels color="#385F73" style="margin-top: 2%;">
                                                <v-expansion-panel style="margin-left: 8%;" bg-color="#385F73"
                                                    variant="inset" title="DESCRIPCION DEL PROBLEMA" text="-LA COMPUTADORA SE RELENTIZA AL ABRIR OUTLOOK Y NO HABILITA LOS BOTONES
                                                                        -NO ENVIA CORREOS Y SALE ERROR DE LOGIN
                                                                        -TARDA AL PRENDER">
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </v-div>
                                        <v-div>
                                            <v-col>
                                                <v-list style="background-color: #385F73">
                                                    <v-list-item style="background-color: #385F73;"
                                                        title="FECHA CREACION: ">
                                                        <v-list-item-subtitle>13/04/2023 </v-list-item-subtitle>
                                                    </v-list-item>
                                                </v-list>
                                                <v-list style="background-color: #385F73">
                                                    <v-list-item title="CATEGORIA">
                                                        <v-list-item-subtitle> OFFICE </v-list-item-subtitle>
                                                    </v-list-item>
                                                </v-list>

                                            </v-col>
                                        </v-div>

                                        <v-col>
                                            <v-list style="background-color: #385F73">
                                                <v-list-item style="background-color: #385F73;" title="PRIORIDAD: ">
                                                    <v-list-item-subtitle> 2 </v-list-item-subtitle>
                                                </v-list-item>
                                            </v-list>


                                        </v-col>
                                    </v-row>
                                    <v-card-actions class="justify-space-between"><v-avatar size="80" rounded="0"
                                            style="margin-left: 2.5%;">
                                            <v-img src="src/assets/enprogreso.png"></v-img>
                                        </v-avatar>
                                        <v-btn style="margin-right: 10.5%;" variant="tonal">
                                            VER DETALLES
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>

                            <v-col cols="12">
                                <v-card color="#1F7087" theme="dark">
                                    <div>
                                        <div>
                                            <v-card-title class="text-h5">
                                                TICKET #2
                                            </v-card-title>
                                            <v-row>
                                                <v-div style="width: 45%;">
                                                    <v-expansion-panels color="#1F7087" style="margin-top: 2%;">
                                                        <v-expansion-panel style="margin-left: 8%;" bg-color="#1F7087"
                                                            variant="inset" title="DESCRIPCION DEL PROBLEMA"
                                                            text="Buenos días, se solicita instalación de drivers de impresora del piso 2 a computadora de juridico. Saludos">
                                                        </v-expansion-panel>
                                                    </v-expansion-panels>
                                                </v-div>
                                                <v-div>
                                                    <v-col>
                                                        <v-list style="background-color: #1F7087">
                                                            <v-list-item style="background-color: #1F7087;"
                                                                title="FECHA CREACION: ">
                                                                <v-list-item-subtitle>03/07/2023 </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                        <v-list style="background-color: #1F7087">
                                                            <v-list-item title="CATEGORIA">
                                                                <v-list-item-subtitle> IMPRESORA </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-col>

                                                </v-div>

                                                <v-col>
                                                    <v-list style="background-color: #1F7087">
                                                        <v-list-item style="background-color: #1F7087;" title="PRIORIDAD: ">
                                                            <v-list-item-subtitle> 2 </v-list-item-subtitle>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                            </v-row>
                                            <v-card-actions class="justify-space-between">

                                                <v-avatar size="80" rounded="0" style="margin-left: 2.5%;">
                                                    <v-img src="src/assets/enprogreso.png"></v-img>
                                                </v-avatar>
                                                <v-btn style="margin-right: 10.5%;" variant="tonal">
                                                    VER DETALLES
                                                </v-btn>
                                            </v-card-actions>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                            <!--#952175 color 3-->
                            <v-col cols="12">
                                <v-card color="#952175" theme="dark">
                                    <div>
                                        <div>
                                            <v-card-title class="text-h5">
                                                TICKET #MAMA
                                            </v-card-title>
                                            <v-row>
                                                <v-div style="width: 45%;">
                                                    <v-expansion-panels color="#952175" style="margin-top: 2%;">
                                                        <v-expansion-panel style="margin-left: 8%;" bg-color="#952175"
                                                            variant="inset" title="DESCRIPCION DEL PROBLEMA"
                                                            text="Buenos días, se solicita instalación de drivers de impresora del piso 2 a computadora de juridico. Saludos">
                                                        </v-expansion-panel>
                                                    </v-expansion-panels>
                                                </v-div>
                                                <v-div>
                                                    <v-col>
                                                        <v-list style="background-color: #952175">
                                                            <v-list-item style="background-color: #952175;"
                                                                title="FECHA CREACION: ">
                                                                <v-list-item-subtitle>03/07/2023 </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                        <v-list style="background-color: #952175">
                                                            <v-list-item title="CATEGORIA">
                                                                <v-list-item-subtitle> IMPRESORA </v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-col>

                                                </v-div>

                                                <v-col>
                                                    <v-list style="background-color: #952175">
                                                        <v-list-item style="background-color: #952175;" title="PRIORIDAD: ">
                                                            <v-list-item-subtitle> 2 </v-list-item-subtitle>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                            </v-row>
                                            <v-card-actions class="justify-space-between">

                                                <v-avatar size="80" rounded="0" style="margin-left: 2.5%;">
                                                    <v-img src="src/assets/enprogreso.png"></v-img>
                                                </v-avatar>
                                                <v-btn style="margin-right: 10.5%;" variant="tonal">
                                                    VER DETALLES 
                                                </v-btn>
                                            </v-card-actions>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>

            </v-window-item>

            <v-window-item value="tab-3" style="min-height:  100%; margin-top: 0%; margin-bottom: 5%; border: 0;">


                <v-col cols="12">
                    <v-card color="#385F73" theme="dark">
                        <v-card-title class="text-h5">
                            TICKET #1
                        </v-card-title>
                        <v-row>
                            <v-div style="width: 45%;">
                                <v-expansion-panels color="#385F73" style="margin-top: 2%;">
                                    <v-expansion-panel style="margin-left: 8%;" bg-color="#385F73" variant="inset"
                                        title="DESCRIPCION DEL PROBLEMA" text="-LA COMPUTADORA SE RELENTIZA AL ABRIR OUTLOOK Y NO HABILITA LOS BOTONES
                                                                        -NO ENVIA CORREOS Y SALE ERROR DE LOGIN
                                                                        -TARDA AL PRENDER
                                                                        ">
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-div>
                            <v-div>
                                <v-col>
                                    <v-list style="background-color: #385F73">
                                        <v-list-item style="background-color: #385F73;" title="FECHA CREACION: ">
                                            <v-list-item-subtitle>13/04/2023 </v-list-item-subtitle>
                                        </v-list-item>
                                    </v-list>
                                    <v-list style="background-color: #385F73">
                                        <v-list-item title="CATEGORIA">
                                            <v-list-item-subtitle> OFFICE </v-list-item-subtitle>
                                        </v-list-item>
                                    </v-list>

                                </v-col>



                            </v-div>
                        </v-row>
                        <v-card-actions>
                            <v-btn variant="text">
                                Listen Now
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>


            </v-window-item>
        </v-window>


        <v-dialog v-model="dialogCrearTicket" width="65%" style="margin-left: 13%;">
            <v-card>
                <v-toolbar color="primary" dark style="z-index: 100; width: 100%;">
                    <h3
                        style="margin-left:2%;font-size:2rem;font-weight:bold; font-family:'Times New Roman', Times, serif;">
                        CREAR TICKET
                    </h3>
                </v-toolbar>

                <v-card style="width: 100%;padding: 2%;margin-right: 0%;" variant="outlined" title="Reportar problema">

                    <v-div>
                        <v-row>
                            <v-col cols="6" md="6"> <v-text-field variant="outlined" density="compact" label="CORREO"
                                    hint="Ejemplo@duxon.com.mx"></v-text-field>
                            </v-col>

                            <v-col cols="6" md="6">
                                <v-select v-model="selectEquipo" variant="outlined" density="compact" :items="itemsEquipo"
                                    label="Equipo"></v-select>
                            </v-col>
                        </v-row>

                        <v-row>

                            <v-col cols="6" md="6">
                                <v-select variant="outlined" density="compact" v-model="selectCategoria"
                                    :items="itemsCategoria" label="Categoría"></v-select>
                            </v-col>

                            <v-col cols="6" md="6">
                                <v-select variant="outlined" density="compact" v-model="selectSubcategoria"
                                    :items="itemsSubcategoria" label="Subcategoría"></v-select>
                            </v-col>
                        </v-row>

                        <v-row style="width: 99%; margin-left: 0.5%;">
                            <v-textarea variant="outlined" density="compact" bg-color="light-blue-lighten-5"
                                color="blue-darken-3" label="Describe el problema aquí..." no-resize="true"></v-textarea>
                        </v-row>

                        <v-row>

                            <v-col
                                style="display: flex;justify-content: space-between; margin-left: 1%;margin-right: 1.5%;">

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

            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTagPlus } from '@mdi/js';
import { mdiReceiptTextSendOutline } from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    data() {
        return {


            tab: "1",
            dialogCrearTicket: false,
            drawer: false,
            path: mdiTagPlus,
            itemsEquipo: ['LAPTOP HP PAVILION', 'LAPTOP DELL NEXTEP', 'DESKTOP LENOVO', 'AIO HP LA'],
            itemsCategoria: ['Correo', 'Office', 'Hardware', 'Software', 'Contabo',],
            itemsSubcategoria: ['No abre Outlook', 'No envio y/o recibo correos', 'Funciona lento el correo', 'Cambio de firma', 'Notificiación o mensaje de error', 'Activación del correo'],

            dialogFoto: false,

            path: mdiReceiptTextSendOutline,


        }
    },
    watch: {

    },
    methods: {
    }
}

</script>
<!-- V DIALOG DE CREAR TICKET CON EL V CARD CHUECO XD
  <v-dialog v-model="dialogCrearTicket" width="75%" style="margin-left: 13%;">
        <v-card>
            <v-container>
                <v-toolbar color="primary" dark style="z-index: 100; width: 100%;">
                    <h3
                        style="margin-left:2%;font-size:2rem;font-weight:bold; font-family:'Times New Roman', Times, serif;">
                        CREAR TICKET
                    </h3>
                </v-toolbar>

                <v-divider style="margin-bottom: 1%;margin-left: 2%;margin-right: 2.3%;"></v-divider>

                <v-card style="width: 94%;padding: 2%;margin-right: 2%;" variant="outlined"
                    title="Reportar problema">

                    <v-div>
                        <v-row>
                            <v-col cols="6" md="6"> <v-text-field variant="outlined" density="compact" label="CORREO" hint="Ejemplo@duxon.com.mx"></v-text-field>
                            </v-col>

                            <v-col cols="6" md="6">
                                <v-select v-model="selectEquipo" variant="outlined" density="compact" :items="itemsEquipo" label="Equipo"></v-select>
                            </v-col>
                        </v-row>

                        <v-row>

                            <v-col cols="6" md="6">
                                <v-select  variant="outlined" density="compact" v-model="selectCategoria" :items="itemsCategoria" label="Categoría"></v-select>
                            </v-col>

                            <v-col cols="6" md="6">
                                <v-select  variant="outlined" density="compact" v-model="selectSubcategoria" :items="itemsSubcategoria"
                                    label="Subcategoría"></v-select>
                            </v-col>
                        </v-row>

                        <v-row style="width: 99%; margin-left: 0.5%;">
                            <v-textarea  density="compact" bg-color="light-blue-lighten-5" color="blue-darken-3"
                                label="Describe el problema aquí..." no-resize="true"></v-textarea>
                        </v-row>

                        <v-row>

                            <v-col
                                style="display: flex;justify-content: space-between; margin-left: 1%;margin-right: 1.5%;">

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

                <v-window v-model="tab">
                    <v-window-item value="tab-1">
                        <v-card width="400" title="This is a title" subtitle="This is a subtitle"
                            text="This is content"></v-card>

                    </v-window-item>
                </v-window>

                <v-dialog v-model="dialogFoto" max-width="70%">
                    kpasho mama
                    <v-btn> hola </v-btn>

                </v-dialog>

            </v-container>
        </v-card>
    </v-dialog>-->
