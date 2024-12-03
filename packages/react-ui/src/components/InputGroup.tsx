import { ark } from "@ark-ui/react"
import { styled } from "../styled-system/jsx"
import { inputGroup } from "../styled-system/recipes"
import {
	forwardRef,
	useRef,
	cloneElement,
	ReactElement,
	MutableRefObject,
	ReactNode,
	useEffect,
	useState,
} from "react"

export type InputGroupProps = {
	leftComponent?: ReactNode
	rightComponent?: ReactNode
	children: ReactElement
}

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.Ref<T> {
	return (node) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(node)
			} else if (ref && typeof ref === "object") {
				;(ref as MutableRefObject<T | null>).current = node
			}
		})
	}
}

const BaseInputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
	(props, ref) => {
		const { leftComponent, rightComponent, children, ...rest } = props

		const localRef = useRef<HTMLElement | null>(null)

		const handleClick = () => {
			localRef.current?.focus()
			localRef.current?.click()
		}

		const [childIsDisabled, setChildIsDisabled] = useState(false)
		const [childIsInvalid, setChildIsInvalid] = useState(false)

		useEffect(() => {
			const updateStates = () => {
				setChildIsDisabled(localRef.current?.getAttribute("disabled") !== null)
				setChildIsInvalid(
					localRef.current?.getAttribute("data-invalid") !== null
				)
			}

			updateStates()
		}, [localRef])

		const clonedChildren = cloneElement(children, {
			ref: mergeRefs(children.ref, localRef),
			style: { flex: 1 },
		})

		return (
			<ark.div
				ref={ref}
				{...rest}
				onClick={handleClick}
				{...(childIsDisabled && { "data-disabled": true })}
				{...(childIsInvalid && { "data-invalid": true })}
			>
				{leftComponent && leftComponent}
				{clonedChildren}
				{rightComponent && rightComponent}
			</ark.div>
		)
	}
)

BaseInputGroup.displayName = "InputGroup"

export const InputGroup = styled(BaseInputGroup, inputGroup)

InputGroup.displayName = "InputGroup"
