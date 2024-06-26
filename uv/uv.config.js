self.__uv$config = {
    scope: '/Service-Worker-Allowed/',
    prefix: '/service/',
    bare: 'https://bare.bareproxy.workers.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
