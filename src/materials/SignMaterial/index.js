import { ShaderMaterial, DoubleSide } from 'three'

export const SignMaterial = new ShaderMaterial({
  vertexShader: require('./vertex.glsl'),
  fragmentShader: require('./fragment.glsl'),
  transparent: true,
  side: DoubleSide
})
