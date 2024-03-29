CAPS.MATERIAL = {

	sheet3: new THREE.ShaderMaterial( {
		uniforms:       CAPS.UNIFORMS3.clipping,
		vertexShader:   CAPS.SHADER.vertexClipping,
		fragmentShader: CAPS.SHADER.fragmentClipping
	} ),

	cap3: new THREE.ShaderMaterial( {
		uniforms:       CAPS.UNIFORMS3.caps,
		vertexShader:   CAPS.SHADER.vertex,
		fragmentShader: CAPS.SHADER.fragment
	} ),

	backStencil3: new THREE.ShaderMaterial( {
		uniforms:       CAPS.UNIFORMS3.clipping,
		vertexShader:   CAPS.SHADER.vertexClipping,
		fragmentShader: CAPS.SHADER.fragmentClippingFront,
		colorWrite: false,
		//colorWrite: true,
		depthWrite: false,
		side: THREE.BackSide
	} ),

	frontStencil3: new THREE.ShaderMaterial( {
		uniforms:       CAPS.UNIFORMS3.clipping,
		vertexShader:   CAPS.SHADER.vertexClipping,
		fragmentShader: CAPS.SHADER.fragmentClippingFront,
		colorWrite: false,
		//colorWrite: true,
		depthWrite: false,
	} ),

	cap: new THREE.ShaderMaterial( {
		uniforms:       CAPS.UNIFORMS.caps,
		vertexShader:   CAPS.SHADER.vertex,
		fragmentShader: CAPS.SHADER.fragment
	} ),

	sheet: new THREE.ShaderMaterial( {
		uniforms:       CAPS.UNIFORMS.clipping,
		vertexShader:   CAPS.SHADER.vertexClipping,
		fragmentShader: CAPS.SHADER.fragmentClipping
	} ),

	backStencil: new THREE.ShaderMaterial( {
		//uniforms:       CAPS.UNIFORMS.clipping,
		uniforms:       CAPS.UNIFORMS.clipping,
		vertexShader:   CAPS.SHADER.vertexClipping,
		fragmentShader: CAPS.SHADER.fragmentClippingFront,
		colorWrite: false,
		depthWrite: false,
		side: THREE.BackSide
	} ),

	frontStencil: new THREE.ShaderMaterial( {
		uniforms:       CAPS.UNIFORMS.clipping,
		vertexShader:   CAPS.SHADER.vertexClipping,
		fragmentShader: CAPS.SHADER.fragmentClippingFront,
		colorWrite: false,
		depthWrite: false,
	} ),

	BoxBackFace:   new THREE.MeshBasicMaterial( { color: 0x000000, transparent: true } ),
	//BoxBackFace:   new THREE.MeshBasicMaterial( { color: 0xEEDDCC, transparent: true } ),

	BoxWireframe:  new THREE.LineBasicMaterial( { color: 0xEEDDCC, linewidth: 2 } ),
	//BoxWireframe:  new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } ),

	BoxWireActive: new THREE.LineBasicMaterial( { color: 0xf83610, linewidth: 4 } ),

	Invisible: new THREE.ShaderMaterial( {
		vertexShader:   CAPS.SHADER.invisibleVertexShader,
		fragmentShader: CAPS.SHADER.invisibleFragmentShader
	} )

};






