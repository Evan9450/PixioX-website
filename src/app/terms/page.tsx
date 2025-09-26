"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: Sep 2025</p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By downloading, installing, or using PixioX ("the App"), you
                  agree to be bound by these Terms of Service. If you do not
                  agree to these terms, please do not use the App.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  2. Description of Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  PixioX is an iOS photo management application that helps users
                  organize, browse, and manage their photo collections. The App
                  provides features including smart organization, gesture-based
                  controls, Live Photo support, and real-time synchronization.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  3. User Responsibilities
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>You are responsible for:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Maintaining the security of your device and photos</li>
                    <li>
                      Ensuring you have the right to organize and manage the
                      photos you use with the App
                    </li>
                    <li>
                      Using the App in compliance with applicable laws and
                      regulations
                    </li>
                    <li>
                      Not attempting to reverse engineer or modify the App
                    </li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  4. Privacy and Data
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. PixioX processes your photos
                  locally on your device. We do not upload, store, or access
                  your personal photos on our servers. Please refer to our
                  Privacy Policy for detailed information about data handling.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  PixioX and all related trademarks, logos, and intellectual
                  property are owned by PixioX Inc. You may not copy, modify,
                  distribute, or create derivative works based on the App
                  without explicit written permission.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  PixioX is provided "as is" without warranties of any kind. We
                  are not liable for any damages arising from the use or
                  inability to use the App, including but not limited to data
                  loss or device malfunction.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  7. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any
                  time. Changes will be effective immediately upon posting. Your
                  continued use of the App constitutes acceptance of the
                  modified terms.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  8. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Service, please
                  contact us at help@pixiox.com or visit our Contact page.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
