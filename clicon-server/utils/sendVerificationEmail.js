import sendEmail from "./sendEmail.js"

const sendVerificationEmail = async({ name, email, verificationToken, origin }) => {
    const verifyEmail = `${origin}/verify?token=${verificationToken}&email=${email}`

    const message = `<h4>Hi ${name}! Please confirm your email by clicking the following link: <a href="${verifyEmail}">Verify Email</a> </h4>`

    return sendEmail({
        to: email, 
        subject: "Email confirmation",
        html : `<h4> Hello ${name}! </h4>
        ${message}`
    })
}

export default sendVerificationEmail