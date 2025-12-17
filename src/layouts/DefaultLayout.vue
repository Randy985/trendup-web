<template>
  <v-app>

    <!-- HEADER -->
<v-app-bar app flat color="white" elevation="1">
  <v-container class="d-flex align-center" style="max-width: 1200px;">
    <v-toolbar-title class="font-weight-bold text-primary">
      Trendup Ideas
    </v-toolbar-title>

    <v-spacer />

    <v-btn variant="text" color="primary" to="/">Inicio</v-btn>
    <v-btn variant="text" color="primary" to="/privacidad">Privacidad</v-btn>
    <v-btn variant="text" color="primary" to="/eliminacion">Eliminación</v-btn>
  </v-container>
</v-app-bar>

    <!-- CONTENIDO A PANTALLA COMPLETA -->
    <v-main>
      <div style="padding-top: 40px; padding-bottom: 40px;">
        <slot />
      </div>
    </v-main>

    <!-- FOOTER -->
    <v-footer app color="white" elevation="1">
      <v-container class="text-center py-4 text-medium-emphasis">
        © {{ new Date().getFullYear() }} Trendup Ideas — Neosite Tech
      </v-container>
    </v-footer>

  </v-app>
</template>
