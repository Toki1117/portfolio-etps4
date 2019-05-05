export default cap2 = Object.create(Object.prototype,
  {
    ejercicios:{
      value: Object.create(Object.prototype, { 
				ejercicio1: {
          value: Object.create(Object.prototype, {
            url: {
              value: "ejercicio1.zip"
            },
            img: {
              value: "imagen.jpg"
            }
          })
        },
        ejercicio2: {
					value: Object.create(Object.prototype, {
            url: {
              value: "ejercicio2.zip"
            },
            img: {
              value: "imagen.jpg"
            }
          })
				},
      })
    },
    ejemplos :{
      value: Object.create(Object.prototype, { 
				ejemplo1: {
					value: Object.create(Object.prototype, {
            url: {
              value: "ejemplo1.zip"
            },
            img: {
              value: "imagen.jpg"
            }
          })
        },
        ejemplo2: {
					value: Object.create(Object.prototype, {
            url: {
              value: "ejemplo2.zip"
            },
            img: {
              value: "imagen.jpg"
            }
          })
				},
      })
    },
  });