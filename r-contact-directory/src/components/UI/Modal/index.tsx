import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

type ModalProps = {
  open?: boolean;
  onOpenChange?(open: boolean): void;
  children: React.ReactNode;
  modalDetails?: {
    heading?: string;
    description?: string;
  };
  triggerProps?: Dialog.DialogTriggerProps;
  trigger?: React.ReactNode;
};

const Modal = ({
  onOpenChange,
  open,
  children,
  modalDetails,
  trigger,
  triggerProps,
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <Dialog.Trigger {...triggerProps} asChild>
          {trigger}
        </Dialog.Trigger>
      )}

      <Dialog.Portal>
        <Dialog.Overlay className="bg-background-2 data-[state=open]:animate-overlayShow fixed inset-0 w-full p-0  " />
        <Dialog.Content className="data-[state=open]:animate-contentShow z-20 fixed top-[50%] left-[50%] max-h-[85vh]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-5  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-2xl text-center font-bold">
            {modalDetails?.heading}
          </Dialog.Title>
          <Dialog.Description className="font-normal text-sm- text-center my-2 text-primary-5">
            {/* Fill out the below form to add new member */}
            {modalDetails?.description}
          </Dialog.Description>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
