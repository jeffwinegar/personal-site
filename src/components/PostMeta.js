import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  font-size: 0.75rem;
  line-height: 1;
`

const PostMeta = ({ metaData }) => {
  const { date, timeToRead } = metaData

  return (
    <StyledContainer>
      <time dateTime={new Date(date).toISOString()}>{date}</time> •{" "}
      <i>{timeToRead} min read</i>
    </StyledContainer>
  )
}

export default PostMeta
