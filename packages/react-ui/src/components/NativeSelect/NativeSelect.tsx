"use client"

import { Field as ArkField } from "@ark-ui/react"
import { nativeSelect } from "@openepi/styled-system/recipes"
import { styled } from "@openepi/styled-system/jsx"

export const NativeSelect = styled(ArkField.Select, nativeSelect)

NativeSelect.displayName = "NativeSelect"
