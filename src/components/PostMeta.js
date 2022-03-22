import React from "react"
import { format, parseISO } from "date-fns"
import styled from "styled-components"

const StyledContainer = styled.div`
  font-size: 0.875rem;
  line-height: normal;
`

const PostMeta = ({ metaData }) => {
  const { date: dateISO, timeToRead } = metaData
  const localizeDate = new Date(dateISO).setDate(
    new Date(dateISO).getDate() + parseInt(1)
  )
  const localeDate = format(new Date(localizeDate), "yyyy-MM-dd")

  return (
    <StyledContainer>
      <time dateTime={localeDate}>{format(parseISO(localeDate), "PPP")}</time> •{" "}
      <i>{timeToRead} min read</i>
    </StyledContainer>
  )
}

export default PostMeta
