import { Button, Form } from "react-bootstrap";

export const DeleteUser = ({ handleDelete }) => {

  return (
    <>

      <Form className="my-3"
        onSubmit={handleDelete}>
        <Button variant="link" type="submit" size="sm">
          Remove account permanently
        </Button>
      </Form>
    </>
  )
}