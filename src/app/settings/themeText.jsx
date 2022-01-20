import React from 'react'
import { styled } from '@mui/material'

export const PreviewText = styled('p')(({ theme }) => ({ fontSize: theme.typography.caption.fontSize }))

/* eslint-disable react/no-unescaped-entities */
export const themeText = {
  Hawaii:
  <>
    <PreviewText>Aloha 'oe, aloha 'oe</PreviewText>
    <PreviewText>E ke onaona noho i ka lipo</PreviewText>
    <PreviewText>One fond embrace</PreviewText>
    <PreviewText>Until we meet again</PreviewText>
  </>,
  Midnight:
  <>
    <PreviewText>Dancing in the moonlight</PreviewText>
    <PreviewText>Everybody's feeling warm and right</PreviewText>
    <PreviewText>It's such a fine and natural sight</PreviewText>
    <PreviewText>Everybody's dancing in the moonlight</PreviewText>
  </>,
  Arizona:
  <>
    <PreviewText> Well, I'm a standing on a corner in Winslow, Arizona.</PreviewText>
    <PreviewText> And such a fine sight to see.</PreviewText>
    <PreviewText>It's a girl, my Lord, in a flatbed Ford.</PreviewText>
    <PreviewText>Slowing down to take a look at me.</PreviewText>
  </>,
  Lush:
  <>
    <PreviewText>There is unrest in the forest.</PreviewText>
    <PreviewText>Trouble with the trees.</PreviewText>
    <PreviewText>For the maples want more sunlight.</PreviewText>
    <PreviewText>And the oaks ignore their pleas.</PreviewText>
  </>,
  Corporate:
  <>
    <PreviewText> Don't need no fast buck lame duck profits for fun.</PreviewText>
    <PreviewText> Quick trick plans, take the money and run.</PreviewText>
    <PreviewText>We need long term, slow burn, getting it done.</PreviewText>
    <PreviewText>And some straight talking, hard working son of a gun.</PreviewText>
  </>,
  Pirate:
  <>
    <PreviewText> I set out to make my mark.</PreviewText>
    <PreviewText>My sword was cast in songs of light.</PreviewText>
    <PreviewText> In sparks and waves, enchanted nights.</PreviewText>
    <PreviewText>Crafting tales and magic spells.</PreviewText>
  </>,
}

/*
Quality Checked: Brian Francis - 12/18/2021
 */
