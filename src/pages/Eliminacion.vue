<template>
  <DefaultLayout>
    <v-container class="py-2" style="max-width: 800px;">
      
      <v-card elevation="2" class="pa-8">
        <h1 class="text-h4 font-weight-bold mb-6 text-primary">
          Eliminación de Datos
        </h1>

        <p class="mb-6">
          Trendup Ideas permite a los usuarios solicitar la eliminación definitiva de su cuenta y de todos los datos asociados.
        </p>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">1. Datos que pueden eliminarse</h2>
        <v-list density="compact">
          <v-list-item>Correo electrónico asociado a Firebase Authentication.</v-list-item>
          <v-list-item>Nombre público y foto de perfil obtenidos durante el login.</v-list-item>
          <v-list-item>Ideas generadas y almacenadas en Firebase Firestore.</v-list-item>
        </v-list>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">2. Cómo solicitar la eliminación</h2>
        <p class="mb-2">
          Para solicitar la eliminación total de tu información, envía un correo a:
        </p>
        <p class="text-primary font-weight-bold mb-2">neositetech@gmail.com</p>
        <p class="mb-4">Incluye:</p>

        <v-list density="compact">
          <v-list-item>Asunto: Solicitud de eliminación de datos</v-list-item>
          <v-list-item>Correo de la cuenta utilizada en la app</v-list-item>
        </v-list>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">3. Proceso de eliminación</h2>
        <v-list density="compact">
          <v-list-item>Eliminación de la cuenta en Firebase Authentication.</v-list-item>
          <v-list-item>Eliminación de todas las ideas almacenadas en Firestore.</v-list-item>
          <v-list-item>Eliminación de cualquier dato adicional relacionado con el usuario.</v-list-item>
        </v-list>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">4. Tiempo de respuesta</h2>
        <p class="mb-4">
          Las solicitudes se procesan en un plazo máximo de 48 a 72 horas.
        </p>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">5. Consideraciones</h2>
        <v-list density="compact">
          <v-list-item>Una vez eliminados los datos, no pueden recuperarse.</v-list-item>
          <v-list-item>No conservamos copias de seguridad asociadas al usuario.</v-list-item>
        </v-list>

        <p class="mt-8 text-medium-emphasis">
          Última actualización: 2025
        </p>

      </v-card>

    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
