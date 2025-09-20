# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript + Vite project configured to build single HTML files. The project uses the `vite-plugin-singlefile` plugin to bundle everything into a single distributable HTML file.

## Commands

### Development

- `pnpm dev` - Start development server with hot reload
- `pnpm preview` - Preview the built application locally

### Build and Type Checking

- `pnpm build` - Type check with vue-tsc and build for production
- `vue-tsc -b` - Run TypeScript compiler for Vue files

### Code Quality

- `pnpm lint` - Run ESLint to check code quality
- `pnpm lint:fix` - Run ESLint and automatically fix issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check if code is formatted correctly

## Architecture

### Key Configuration

- **Vite Config**: Uses `vite-plugin-singlefile` to create single HTML builds
- **TypeScript**: Configured with separate tsconfig files for app (`tsconfig.app.json`) and node (`tsconfig.node.json`)
- **Vue Setup**: Uses Composition API with `<script setup>` syntax

### Project Structure

- `src/main.ts` - Application entry point
- `src/App.vue` - Root component using `<script setup>`
- `src/components/` - Vue components directory
- `public/` - Static assets served at root
- `dist/` - Build output (single HTML file)

### Development Patterns

- Uses Vue 3 Composition API with `<script setup>` syntax
- TypeScript strict mode enabled
- Scoped CSS in Vue components
- ES modules (`type: "module"` in package.json)
