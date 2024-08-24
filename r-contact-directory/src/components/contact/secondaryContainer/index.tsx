import React, { useState } from "react";
import ContactCard from "../contactCard";
import { useGetCardsQuery } from "@/redux/api";
import EditContact from "../EditContact";
import { contactData } from "../addNewContact/type";
import DeleteContact from "../DeleteContact";

const SecondaryContainer = () => {
  const { data, error, isLoading } = useGetCardsQuery();
  const [open, setOpen] = useState<boolean>(false);
  const [details, setDetails] = useState<contactData>();
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  // console.log("data", data);

  return (
    <>
      <div className="py-3 grid grid-cols-4 gap-4">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data?.map((items) => (
            <ContactCard
              key={items.phone}
              data={items}
              setDetails={setDetails}
              setEditModalOpen={setOpen}
              setDeleteModal={setDeleteOpen}
            />
          ))
        ) : null}
      </div>
      {data?.length === 0 && <>There are no contacts available....</>}
      <EditContact open={open} contactDetails={details} setOpen={setOpen} />
      <DeleteContact
        open={deleteOpen}
        contactDetails={details}
        setOpen={setDeleteOpen}
      />
    </>
  );
};

export default SecondaryContainer;
