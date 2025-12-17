<template>
  <DefaultLayout>

    <div class="text-center" style="max-width: 800px; margin: 0 auto;">
      <h1 class="mb-4 font-weight-bold text-primary">Trendup Ideas</h1>

      <p class="mb-8 text-medium-emphasis" style="font-size: 1.2rem;">
        Página oficial con acceso a la Política de Privacidad y al proceso de eliminación de datos.
      </p>

      <div style="display: flex; justify-content: center; gap: 20px;">
        <v-btn color="primary" size="large" to="/privacidad">
          Política de Privacidad
        </v-btn>

        <v-btn color="secondary" size="large" to="/eliminacion">
          Eliminación de Datos
        </v-btn>
      </div>
    </div>

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
