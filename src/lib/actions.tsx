'use server'

import { Resend } from "resend"
import { validateString } from "./utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(formData: FormData) {
  console.log(formData.get('senderEmail'))
  console.log(formData.get('message'))

  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail) || !validateString(message)) {
    return {
      status: 400,
      body: "Invalid mail request"
    }
  }

  try {

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "manavkush@gmail.com",
      subject: "New message from portfolio",
      reply_to: senderEmail as string,
      text: `From: ${formData.get('senderEmail')}\n\n${formData.get('message')}`
    })
  } catch(error) {
    console.error(error)
  }
}
