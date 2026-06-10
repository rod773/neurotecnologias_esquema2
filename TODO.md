# TODO - Fix parpadeo de partículas en móvil

- [ ] Actualizar `src/components/nebula-background.tsx`:
  - [ ] Guardar dimensiones lógicas (logicalW/logicalH) tras `resize()`
  - [ ] Usar logicalW/logicalH en `draw()` en lugar de `window.innerWidth/innerHeight`
  - [ ] Hacer `ctx.clearRect(0, 0, logicalW, logicalH)` consistente con `setTransform(dpr, ...)`
  - [ ] Aplicar debounce/throttle al handler de `resize` para evitar re-inicializaciones masivas en móvil
- [ ] Verificar visualmente en móvil y en rotación de pantalla
