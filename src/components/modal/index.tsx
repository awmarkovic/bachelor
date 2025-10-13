import { useEffect, useRef, type ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal(props: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const clickBoundary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [props.isOpen]);

  useEffect(() => {
    if (!props.isOpen) return;
    const controller = new AbortController();

    addEventListener(
      "click",
      (event) => {
        if (!dialogRef.current?.open) return;
        if (!clickBoundary.current) return;
        if (!(event.target instanceof HTMLElement)) return;

        if (!clickBoundary.current.contains(event.target)) {
          dialogRef.current?.close();
        }
      },
      {
        signal: controller.signal,
        capture: true,
      }
    );

    return () => {
      controller.abort();
    };
  }, [props.isOpen]);

  return (
    <>
      <dialog
        className={styles.dialog}
        ref={dialogRef}
        onClose={() => {
          props.onClose();
        }}
      >
        <div ref={clickBoundary}>{props.children}</div>
      </dialog>
    </>
  );
}
