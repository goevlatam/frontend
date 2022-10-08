import React from "react";
import Booking from "../../components/Booking";
import Layout from "../../components/Layout";

const BookId = ({ bookId }) => {
  return (
    <Layout>
      {" "}
      <div>
        <Booking />
      </div>
    </Layout>
  );
};

export default BookId;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  return {
    props: {
      bookId: id,
    },
  };
};
