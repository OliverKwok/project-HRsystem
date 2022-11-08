import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

type FormState = {
  name: string
  color: string
  gender: string
}

export default function Employee () {
  const { register, handleSubmit, watch } = useForm<FormState>({
    defaultValues: {
      name: '',
      color: '#c0ffee',
      gender: '',
    },
  })

  useEffect(() => {
    let sub = watch(data => {
      console.log('update form data:', data)
    })
    return () => sub.unsubscribe()
  }, [watch])

  function submit(data: FormState) {
    console.log('submit form data:', data)
  }

  return (
    <div className="container">
      <h1>New Employee</h1>
      <Form onSubmit={handleSubmit(submit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" {...register('name')} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="color"
            {...register('color')}
            className="d-inline"
          />
          <Form.Text className="text-muted">
            Custom the background color
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

