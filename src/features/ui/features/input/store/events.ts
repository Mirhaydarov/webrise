import { FocusEvent } from 'react';
import { createEvent } from 'effector';

export const onBlur = createEvent<FocusEvent<HTMLDivElement>>();

export const onFocus = createEvent<FocusEvent<HTMLDivElement>>();

export const toggleFocus = createEvent<boolean>();
