const reactBundle = require('../dist/react-text-mask-hoc.cjs');

describe('import-bundle-cjs', () => {
    test('React bundle should export functions', () => {
        expect(typeof reactBundle.TextMask).toBe('function');
        expect(typeof reactBundle.InputAdapter).toBe('function');
        expect(typeof reactBundle.SpanAdapter).toBe('function');
        expect(typeof reactBundle.TextMaskTransformer).toBe('function');
    });
});
