import React from "react"
import { format, parseISO } from "date-fns"
import styled from "styled-components"

const StyledContainer = styled.div`
  font-size: 0.875rem;
  line-height: normal;
`

const PostMeta = ({ metaData }) => {
  const { date, timeToRead } = metaData

  return (
    <StyledContainer>
      <time dateTime={date}>{format(parseISO(date), "PPP")}</time> •{" "}
      <i>{timeToRead} min read</i>
    </StyledContainer>
  )
}

export default PostMeta
