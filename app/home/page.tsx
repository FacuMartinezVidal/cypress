"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Code,
  PlayCircle,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                Cypress Course
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/todo-tasks">
                <Button data-cy="todo-app-demo-button" variant="ghost">
                  Todo App Demo
                </Button>
              </Link>
              <Button
                data-cy="get-started-button"
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Master Cypress Testing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn how to write reliable, maintainable, and efficient end-to-end
            tests with Cypress. From basics to advanced concepts, this course
            has everything you need.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Course Outline
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <PlayCircle className="h-8 w-8 text-blue-600 mb-4" />
              <CardTitle>Interactive Learning</CardTitle>
              <CardDescription>
                Hands-on exercises and real-world examples to help you master
                Cypress testing.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-blue-600 mb-4" />
              <CardTitle>Practical Examples</CardTitle>
              <CardDescription>
                Learn through practical examples and real-world testing
                scenarios.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>
                Follow industry best practices and learn from experienced
                testers.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Try the Demo
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our interactive Todo App demo to see Cypress testing in
            action.
          </p>
          <Link href="/todo-tasks">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Todo App Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Cypress Course. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
