<template>
  <DefaultLayout>
    <v-container class="py-2" style="max-width: 800px;">

      <v-card elevation="2" class="pa-8">
        <h1 class="text-h4 font-weight-bold mb-6 text-primary">
          Política de Privacidad
        </h1>

        <p class="mb-6">
          Trendup Ideas es una aplicación desarrollada por Neosite Tech cuyo propósito es generar ideas para contenido en redes sociales utilizando Inteligencia Artificial.
        </p>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">1. Información que recopilamos</h2>
        <p class="mb-3">La aplicación recopila únicamente los siguientes datos:</p>

        <v-list density="compact">
          <v-list-item>Correo electrónico del usuario (Firebase Authentication).</v-list-item>
          <v-list-item>Nombre público y foto de perfil (si el usuario lo autoriza en Google/Facebook).</v-list-item>
          <v-list-item>Ideas generadas o guardadas por el usuario (almacenadas en Firebase Firestore).</v-list-item>
        </v-list>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">2. Para qué utilizamos los datos</h2>

        <v-list density="compact">
          <v-list-item>Identificar al usuario dentro de la app.</v-list-item>
          <v-list-item>Permitir guardar ideas personalizadas en Firestore.</v-list-item>
          <v-list-item>Mejorar el funcionamiento general de la aplicación.</v-list-item>
        </v-list>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">3. Servicios de terceros utilizados</h2>

        <h3 class="text-h6 font-weight-medium mt-6 mb-2">Firebase Authentication</h3>
        <p class="mb-4">Utilizado para el inicio de sesión con Google o Facebook. No almacenamos contraseñas.</p>

        <h3 class="text-h6 font-weight-medium mt-6 mb-2">Cloud Firestore</h3>
        <p class="mb-4">Base de datos donde se guardan las ideas generadas por cada usuario.</p>

        <h3 class="text-h6 font-weight-medium mt-6 mb-2">Firebase Functions</h3>
        <p class="mb-4">Procesa las solicitudes a la API de OpenAI de manera segura.</p>

        <h3 class="text-h6 font-weight-medium mt-6 mb-2">OpenAI API</h3>
        <p class="mb-4">
          La generación de ideas utiliza Inteligencia Artificial. La clave privada de OpenAI se mantiene en Firebase Functions; nunca es accesible para los usuarios.
        </p>

        <h3 class="text-h6 font-weight-medium mt-6 mb-2">Google Mobile Ads</h3>
        <p class="mb-4">La aplicación puede mostrar anuncios intersticiales y banners. No se recopila información sensible.</p>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">4. Eliminación de datos</h2>
        <p class="mb-4">
          El usuario puede solicitar la eliminación total de su cuenta y todos sus datos personales.  
          El procedimiento se detalla en <strong>/eliminacion</strong>.
        </p>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">5. Seguridad</h2>

        <v-list density="compact">
          <v-list-item>La clave privada de OpenAI nunca se almacena en el dispositivo del usuario.</v-list-item>
          <v-list-item>Firestore está protegido con reglas que limitan el acceso solo al usuario correspondiente.</v-list-item>
          <v-list-item>No vendemos ni compartimos datos personales con terceros.</v-list-item>
        </v-list>

        <h2 class="text-h5 font-weight-medium mt-8 mb-3">6. Información de contacto</h2>
        <p class="mb-2">
          Para dudas o solicitudes relacionadas con esta política, contáctanos en:
        </p>
        <p class="text-primary font-weight-bold mb-8">neositetech@gmail.com</p>

        <p class="text-medium-emphasis">Última actualización: 2025</p>

      </v-card>

    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
