<script setup lang="ts">
import {
  FieldSet,
  FieldGroup,
  FieldLegend,
  Field,
  FieldLabel,
  FieldDescription,
  FieldSeparator,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldButton } from "@/components/form";
import { useForm } from "vee-validate";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  message: z.string().min(10).max(100),
});

const form = useForm({
  validationSchema: formSchema,
});

const handleSubmit = form.handleSubmit((values) => {
  console.log(`form submitted: `, values);
});

defineProps<{
  errors?: Array<{ message?: string } | undefined>;
}>();
</script>

<template>
  <div class="@container">
    <div class="w-full max-w-4xl">
      <form @submit="handleSubmit">
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel for="name"> Name </FieldLabel>
                <FieldDescription> Provide your full name for identification </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel for="lastName"> Message </FieldLabel>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                id="message"
                placeholder="Hello, world!"
                required
                class="min-h-[100px] resize-none sm:min-w-[300px]"
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldButton type="submit"> Submit </FieldButton>
              <FieldButton type="button" variant="outline"> Cancel </FieldButton>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
