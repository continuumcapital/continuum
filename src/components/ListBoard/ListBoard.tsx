import React from 'react'
import { styled } from '../../../stitches.config'
import { List, Image, Avatar, Heading, Button, Text } from '@components'

const Wrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
})

const Figure = styled('figure', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center', 
  position: 'relative',

  figcaption: {
    marginLeft: 16,
    lineHeight: 1.3
  }
})

const HeadingAccent = styled('div', {
  color: '$gray600'
})

const LessonDue = styled('div', {
  position: 'relative',
  padding: '12px 16px',
  borderRadius: '$pill',
  background: '#222328',
  fontFamily: '$sansSerif',
  fontSize: '$s0'
})

const BoardHeader = styled('header', {
  position: 'relative',
  width: '100%',
  margin: '50px auto',

  '> div:first-child': {
    marginBottom: 32
  }
})

const TitleAccent = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  paddingBottom: 16,
  marginBottom: 16,
  color: '$gray700',

  // For the line on the bottom of the container
  // This is the smaller inset line, above the main title 

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 1,
    background: '$gunMetal'
  }
})

const LessonStatus = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  minWidth: 150
})

// -------------- Typescript declarations -------------- //

interface ListBoardProps {
  title: string
  info?: string | React.ReactNode
  lessons?: boolean
  students?: boolean
  items: {
    image?: string
    title: string
    subtitle?: string
    dueDate?: string
    status?: 'start' | 'completed' | 'continue'
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ListBoard = ({
    title,
    info,
    items,
    lessons,
    students
  }: ListBoardProps ) => {
  
  return(

    <Wrap>
      <BoardHeader>
        <div>
          <TitleAccent>Lesson Two</TitleAccent>
          <Heading bold="heavy" size="l6" title={ title } />
        </div>
        
        <Text fontSize="l1">{ info }</Text>
      </BoardHeader>

      <List decoration="dividers" spacing="l3">
        { items.map(( item, i ) => (
          <li key={`list-${ i }`}>
            <Content>
              <Figure>
                { 
                  lessons ? (
                    <Image variant="thumb" borderRadius="r1" image={ item.image } />
                  ) : students ? (
                    <Avatar size="l1" name="Tyler Stober" />
                  ) : null 
                }
                
                { students ? null : (
                  <figcaption>
                    { lessons ? ( <HeadingAccent>Page { i + 1 } of { items.length }</HeadingAccent> ) : null }
                    <Heading bold="heavy" size="l2" title={ item.title } />
                    <div>{ item.subtitle }</div>
                  </figcaption>
                )}
              </Figure>

              { item.dueDate ? ( <LessonDue>Due: { item.dueDate }</LessonDue> ) : null }

              { lessons ? (
                <LessonStatus>
                  { 
                    item.status == "completed" ? ( <Button size="l0" variant="success" title="Completed" icon="check" /> ) 
                    : item.status == "start" ? ( <Button size="l0" variant="primary" title="Start Lesson" /> ) 
                    : item.status == "continue" ? ( <Button size="l0" variant="primary" title="Start Lesson" /> ) 
                    : ( <Button size="l0" variant="disabled" title="Locked" icon="lock-closed" /> ) 
                  }
                </LessonStatus>
              ) : null}
            </Content>
          </li>
        ))}
      </List>
    </Wrap>
    
  )
}
