import { FormEvent, MouseEvent } from 'react'
import { createEvent } from 'effector'

export const resultToggler = createEvent<boolean>()

export const onSubmit = createEvent<FormEvent<HTMLFormElement>>()

export const onCancel = createEvent<MouseEvent<HTMLButtonElement>>()
