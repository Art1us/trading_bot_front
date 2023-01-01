import Portal from "../Portal"
import { Layout } from "./Layout/Layout"
import { ANIMATION_TIME } from "./Layout/const"
import { useMount } from "../../hooks/useMount/useMount"

export function SimpleAnimatedModal({
  opened,
  onClose,
  children,
  innerClassName,
}) {
  const { mounted } = useMount(opened, ANIMATION_TIME)

  if (!mounted) {
    return null
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened} innerClassName={innerClassName}>
        {children}
      </Layout>
    </Portal>
  )
}
