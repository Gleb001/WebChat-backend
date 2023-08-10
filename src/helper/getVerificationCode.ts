// constants
const getVerificationCode = (length: number) => (
    Math.random() * 10 * length
);

// export
export = getVerificationCode;