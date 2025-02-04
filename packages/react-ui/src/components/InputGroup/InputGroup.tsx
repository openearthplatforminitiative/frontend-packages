"use client"

import { ark } from "@ark-ui/react"
import { styled } from "@openepi/styled-system/jsx"
import { inputGroup } from "@openepi/styled-system/recipes"
import React, {
	useRef,
	cloneElement,
	type ReactElement,
	type ReactNode,
	useEffect,
	useState,
} from "react"

interface ReactElementWithRef extends ReactElement {
	props: {
		ref?: React.Ref<HTMLElement>
		[key: string]: any
	}
}

export type InputGroupProps = {
	leftComponent?: ReactNode
	rightComponent?: ReactNode
	children: ReactElementWithRef
	ref?: React.Ref<HTMLDivElement>
}

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.Ref<T> {
	return (node) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(node)
			} else if (ref && typeof ref === "object") {
				ref.current = node
			}
		})
	}
}

const BaseInputGroup = (props: InputGroupProps) => {
	const { leftComponent, rightComponent, children, ...rest } = props

	const localRef = useRef<HTMLElement | null>(null)

	const handleClick = () => {
		localRef.current?.focus()
		localRef.current?.click()
	}

	const [childIsDisabled, setChildIsDisabled] = useState(false)
	const [childIsInvalid, setChildIsInvalid] = useState(false)

	cloneElement(children, {})

	const clonedChildren = cloneElement(children, {
		ref: mergeRefs(children.props.ref, localRef),
		style: { flex: 1 },
	})

	useEffect(() => {
		const updateStates = () => {
			setChildIsDisabled(localRef.current?.getAttribute("disabled") !== null)
			setChildIsInvalid(localRef.current?.getAttribute("data-invalid") !== null)
		}

		updateStates()
	}, [localRef])

	return (
		<ark.div
			onClick={handleClick}
			{...(childIsDisabled && { "data-disabled": true })}
			{...(childIsInvalid && { "data-invalid": true })}
			{...rest}
		>
			{leftComponent && leftComponent}
			{clonedChildren}
			{rightComponent && rightComponent}
		</ark.div>
	)
}

BaseInputGroup.displayName = "InputGroup"

export const InputGroup = styled(BaseInputGroup, inputGroup)

InputGroup.displayName = "InputGroup"
