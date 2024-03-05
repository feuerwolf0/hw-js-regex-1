export default class Validator {
    validateUsername(username) {
        return /^(?!.*[0-9_-]{4,}.*)(?!^[0-9_-].*)(?!.*[0-9_-]$)[a-zA-Z0-9_-]+$/.test(username);
    }
}