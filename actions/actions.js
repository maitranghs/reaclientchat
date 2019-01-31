const REGISTER_MEMBER = 'REGISTER_MEMBER'

function registerMember(member) {
    return {
        type: REGISTER_MEMBER,
        member
    }
}

export default {
    registerMember
}